#!/bin/bash

URL="https://olympics.com/en/beijing-2022/sports/"
IMAGE_URL=https://olympics.com/Images/Static/beijing-images/disciplines/olympics

# Pull the sports name from above URL
#
# Sample line of HTML
# <li class="b2022-discipline -freestyle-skiing">
# 
# 1. Grep lines with "b2022-discipline"
# 2. split by space, keep the 3rd field
# 3. split by ", keep the 1st field
# 4. remove the starting -
# 5. Put command output into an array "array= ( $(command) )"
# 6. Download each image
#

SPORTS_ARRAY=( $(curl $URL | grep "b2022-discipline " | cut -d " " -f 3 | cut -d '"' -f 1 | cut -c 2-) )


#echo ${SPORTS_ARRAY[1]}

for sport in ${SPORTS_ARRAY[@]}; do
  echo "Downloading $sport.svg..."
  curl "$IMAGE_URL/$sport.svg" > "../$sport.svg"
done
