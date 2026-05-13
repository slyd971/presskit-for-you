#!/bin/zsh
set -euo pipefail
setopt null_glob

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TMP_DIR="$ROOT_DIR/.tmp/previews"
OUT_DIR="$ROOT_DIR/public/previews"

mkdir -p "$TMP_DIR" "$OUT_DIR"

capture_site() {
  local slug="$1"
  local url="$2"
  local prefix="$TMP_DIR/$slug"

  rm -f "${prefix}"-*.png

  osascript <<APPLESCRIPT
tell application "Safari"
  activate
  if (count of windows) = 0 then
    make new document
  end if
  set bounds of front window to {40, 40, 1360, 980}
  set URL of current tab of front window to "$url"
end tell
delay 5
APPLESCRIPT

  local offsets=(0 700 1500 2300)
  local index=0

  for offset in "${offsets[@]}"; do
    osascript <<APPLESCRIPT
tell application "Safari"
  do JavaScript "window.scrollTo({ top: $offset, behavior: 'instant' });" in current tab of front window
end tell
delay 1.4
APPLESCRIPT

    screencapture -x -R40,120,1320,820 "${prefix}-${index}.png"
    index=$((index + 1))
  done

  ffmpeg -y \
    -loop 1 -t 1.4 -i "${prefix}-0.png" \
    -loop 1 -t 1.4 -i "${prefix}-1.png" \
    -loop 1 -t 1.4 -i "${prefix}-2.png" \
    -loop 1 -t 1.4 -i "${prefix}-3.png" \
    -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.35:offset=1.05[v1];[v1][2:v]xfade=transition=fade:duration=0.35:offset=2.45[v2];[v2][3:v]xfade=transition=fade:duration=0.35:offset=3.85,format=yuv420p[v]" \
    -map "[v]" \
    -movflags +faststart \
    -r 24 \
    "$OUT_DIR/${slug}.mp4"
}

capture_site "dj" "https://djslyd.presskit.fr/"
capture_site "artist" "https://artist-presskit.vercel.app/"
capture_site "makeup" "https://ishma-makeupartist.vercel.app/"
