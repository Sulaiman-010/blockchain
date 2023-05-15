FROM node:14.17.0

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn global add truffle
RUN yarn

COPY . .


COPY dockerEntrypoint.sh /
RUN chmod +x /dockerEntrypoint.sh

EXPOSE 3000

ENTRYPOINT [ "./dockerEntrypoint.sh" ]
