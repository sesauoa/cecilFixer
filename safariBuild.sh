#! /bin/bash
# Sets up cecilFixer.safariExtension for building by copying the js files into said directory

mkdir ./cecilFixer.safariextension/package/duplicates

cp ./package/jquery-1.7.2.min.js ./cecilFixer.safariextension/package/duplicates/
cp ./package/popupFixer.js ./cecilFixer.safariextension/package/duplicates/
cp ./package/resourcesFixer.js ./cecilFixer.safariextension/package/duplicates/
