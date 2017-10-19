# SPEECH ANNOTATION TOOL
Intergrated to MTurk for getting speech annotations from video

tested on google chrome

Provide the right paths in index.html according to your files location ( files should be provided with a URL )
### How to submit a hit to aws

1. set the right aws_key and secret_key in the boro_hit.py
2. python boro_hit.py


### Annotation instructions

#### uploading a video url
(sample video in videos folder)
1. go to the hit.
2. Provide a url to the video you want to annotate
3. Submit the url

#### annotation guideline
1. Enter the character name
2. Click on "start talking" to play the video
3. Click on "stop talking" when that person stops talking/other person starts talking
4. If there is some noise in the background, choose appropriate option for background noise
5. It's necessary to click on "SAVE" before you proceed. ( you should be able to view this entry in the table below)
6. Repeat steps 1-5, until video is over.
7. Then click on "Finish" to submit your results


