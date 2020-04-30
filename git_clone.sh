#! /bin/bash
echo "git add"
git add ~/*
echo "git commit"
git commit -m "clone_All_Files"
echo "git push"
git push origin master
