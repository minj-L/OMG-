#!/bin/bash

/usr/bin/python3 /data/mongo/consert/consert.py

mongoimport -d consert -c consert_1111 --drop --type csv --headerline --file sample1111.csv
mongoimport -d consert -c consert_1114 --drop --type csv --headerline --file sample1114.csv
mongoimport -d consert -c consert_1117 --drop --type csv --headerline --file sample1117.csv
mongoimport -d consert -c consert_1120 --drop --type csv --headerline --file sample1120.csv
mongoimport -d consert -c consert_1121 --drop --type csv --headerline --file sample1121.csv
mongoimport -d consert -c consert_1123 --drop --type csv --headerline --file sample1123.csv
mongoimport -d consert -c consert_1126 --drop --type csv --headerline --file sample1126.csv
mongoimport -d consert -c consert_1129 --drop --type csv --headerline --file sample1129.csv
mongoimport -d consert -c consert_1130 --drop --type csv --headerline --file sample1130.csv
mongoimport -d consert -c consert_1132 --drop --type csv --headerline --file sample1132.csv
mongoimport -d consert -c consert_1135 --drop --type csv --headerline --file sample1135.csv
mongoimport -d consert -c consert_1138 --drop --type csv --headerline --file sample1138.csv
mongoimport -d consert -c consert_1141 --drop --type csv --headerline --file sample1141.csv
mongoimport -d consert -c consert_1144 --drop --type csv --headerline --file sample1144.csv
mongoimport -d consert -c consert_1147 --drop --type csv --headerline --file sample1147.csv
mongoimport -d consert -c consert_1150 --drop --type csv --headerline --file sample1150.csv
mongoimport -d consert -c consert_1153 --drop --type csv --headerline --file sample1153.csv
mongoimport -d consert -c consert_1154 --drop --type csv --headerline --file sample1154.csv
mongoimport -d consert -c consert_1156 --drop --type csv --headerline --file sample1156.csv
mongoimport -d consert -c consert_1159 --drop --type csv --headerline --file sample1159.csv
mongoimport -d consert -c consert_1162 --drop --type csv --headerline --file sample1162.csv
mongoimport -d consert -c consert_1165 --drop --type csv --headerline --file sample1165.csv
mongoimport -d consert -c consert_1168 --drop --type csv --headerline --file sample1168.csv
mongoimport -d consert -c consert_1171 --drop --type csv --headerline --file sample1171.csv
mongoimport -d consert -c consert_1174 --drop --type csv --headerline --file sample1174.csv


