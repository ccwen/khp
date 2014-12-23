cd lib
watchify --verbose -t reactify  index.js --debug -o ../dist/bundle.js
cd ..