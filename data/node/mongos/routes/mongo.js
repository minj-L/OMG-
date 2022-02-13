const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var consertSchema = mongoose.Schema({
    prfnm : String,
    prfpdfrom : String,
    prfpdto : String,
    fcltynm : String,
    poster : String,
    genrenm : String,
    prfstate : String
});

//creta model with mongodb collection & schema
var test = mongoose.model('consert_1111',consertSchema);
//서울특별시종로구
var con1111 = mongoose.model('consert_1111',consertSchema);
//서울특별시중구
var con1114 = mongoose.model('consert_1114',consertSchema);
//서울특별시용산구
var con1117 = mongoose.model('consert_1117',consertSchema);
//서울특별시성동구
var con1120 = mongoose.model('consert_1120',consertSchema);
//서울특별시광진구
var con1121 = mongoose.model('consert_1121',consertSchema);
//서울특별시성북구
var con1129 = mongoose.model('consert_1129',consertSchema);
//서울특별시강북구
var con1130 = mongoose.model('consert_1130',consertSchema);
//서울특별시서대문구
var con1141 = mongoose.model('consert_1141',consertSchema);
//서울특별시마포구
var con1144 = mongoose.model('consert_1144',consertSchema);
//서울특별시구로구
var con1153 = mongoose.model('consert_1153',consertSchema);
//서울특별시금천구
var con1154 = mongoose.model('consert_1154',consertSchema);
//서울특별시영등포구
var con1156 = mongoose.model('consert_1156',consertSchema);
//서울특별시서초구
var con1165 = mongoose.model('consert_1165',consertSchema);
//서울특별시강남구
var con1168 = mongoose.model('consert_1168',consertSchema);
//서울특별시송파구
var con1171 = mongoose.model('consert_1171',consertSchema);
//서울특별시강동구
var con1174 = mongoose.model('consert_1174',consertSchema);


//test 쿼리
router.get('/getlist', function(req, res, next) {
    test.find({fcltynm : '종로아이들극장'}, function(err,docs){
        if(err) console.log('err');
        res.send(docs);
    });
});

//서울특별시종로구 공연장 리스트
router.get('/list1111', function(req, res, next) {
    con1111.find({},{_id : 0, poster : 1}).exec(function(err,docs){ //distinct("컬럼명") : 중복을 제거
        if(err) console.log('err');
        res.writeHead(200);
        console.log(typeof(docs));
        var poster_add = docs;
        console.log(poster_add.poster);

        for (var i = 0; i < 10; i++) {
          //console.log(poster_add[i].poster);
          if (i < Object.keys(poster_add)[Object.keys(poster_add).length - 1])
          {
            poster_add[i];
          } else {
            poster_add[i] = "/dadefault_img.png"
          }
        }

        var template = `
        <!doctype html>
        <html>
        <head>
          <title>Result</title>
          <meta charset="utf-8">
        </head>
        <body>
          <img src=${'\"' + poster_add[0].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[1].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[2].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[3].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[4].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[5].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[6].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[7].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[8].poster + '\"'}>
        </body>
        <body>
          <img src=${'\"' + poster_add[9].poster + '\"'}>
        </body>

        </html>
       `;
       res.end(template);
    });
});

//서울특별시중구 공연장 리스트
router.get('/list1114', function(req, res, next) {
  con1114.distinct("fcltynm").exec(function(err,docs){ //distinct("컬럼명") : 중복을 제거
      if(err) console.log('err');
      res.send(docs);
  });
});

//



module.exports = router;
