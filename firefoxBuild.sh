#! /bin/bash
# Sets up cecilFixer-firefox for building by copying the js files into said directory

mkdir ./cecilFixer-firefox/data/duplicates

cp ./package/jquery-1.7.2.min.js ./cecilFixer-firefox/package/duplicates/
cp ./package/popupFixer.js ./cecilFixer-firefoxpackage/duplicates/
cp ./package/resourcesFixer.js ./cecilFixer-firefox/package/duplicates/
