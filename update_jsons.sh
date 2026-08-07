#!/bin/bash

# This is all quick and dirty

DL_DIR="./downloads"

if [ ! -d "$DL_DIR" ]; then
  echo "Missing downloads dir, please run from the project directory"
  exit 1
fi

TO_DOWNLOAD="common-crawlers.json
special-crawlers.json
user-triggered-fetchers.json
user-triggered-fetchers-google.json
user-triggered-agents.json
"

for dl in $TO_DOWNLOAD; do
  wget -O "$DL_DIR/$dl" "https://developers.google.com/static/crawling/ipranges/$dl"
done
