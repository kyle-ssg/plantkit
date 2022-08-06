# ----------------------------------------------------------------------------- #
#                         Dockerfile                                            #
# ----------------------------------------------------------------------------- #
# image:    testcafe                                                            #
# name:     solidstategroup/testcafe                                            #
# desciption: Used for testcafe     e2e tests                                   #
# repo:     https://gitlab.com/solidstategroup/boilerplate/boilerplate-frontend #
# authors:  kyle-ssg                                                            #
# ----------------------------------------------------------------------------- #

FROM node:16.13.2
LABEL maintainer="kyle@solidstategroup.com"

RUN apt-get update
RUN wget https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_98.0.4758.80-1_amd64.deb
RUN apt install -y ./google-chrome*.deb -f
RUN apt-get clean

CMD ["/bin/bash"]
