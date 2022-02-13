from urllib.request import urlopen
from urllib.parse import urlencode, unquote, quote_plus
from datetime import datetime
from dateutil.relativedelta import relativedelta
import urllib
import requests
import pandas as pd
import xmltodict
import json
import csv

f = open('/data/mongo/consert/seoul_code.csv', 'r', encoding='utf-8')
rdr = csv.reader(f)

for line in rdr:
    #before_day = (datetime.date.today() - datetime.timedelta(days=10)).strftime('%Y%m%d')
    before_day = (datetime.now()-relativedelta(years=1)).strftime('%Y%m%d')
    end_day = (datetime.now()+relativedelta(months=3)).strftime('%Y%m%d')


    key='fb50fd0400884f7699ca5c92ea1f9be8'
    # f는 {}안에 넣을 내용을 자유롭게 정할 수 있다.
    url = f'http://www.kopis.or.kr/openApi/restful/prffest?service={key}'
    queryParams = '&' + urlencode({ quote_plus('stdate') : before_day,
                                    quote_plus('eddate') : end_day,
                                    quote_plus('signgucodesub') : line[0]})
    url2 = url + queryParams

    response = urlopen(url2)
    results = response.read().decode("utf-8")
    results_to_json = xmltodict.parse(results)
    data = json.loads(json.dumps(results_to_json))
    #print(type(data))   # dic
    #print(data)

    try:
        consert=data['dbs']['db']
    except:
        consert=[]

    #추가하고 싶은 리스트 생성
    prfnm_l=[]
    prfpdfrom_l=[]
    prfpdto_l=[]
    fcltynm_l=[]
    poster_l=[]
    genrenm_l=[]
    prfstate_l=[]

    for i in consert:
        prfnm_l.append(i['prfnm'])
        prfpdfrom_l.append(i['prfpdfrom'])
        prfpdto_l.append(i['prfpdto'])
        fcltynm_l.append(i['fcltynm'])
        poster_l.append(i['poster'])
        genrenm_l.append(i['genrenm'])
        prfstate_l.append(i['prfstate'])

    df=pd.DataFrame([prfnm_l,prfpdfrom_l,prfpdto_l,fcltynm_l,poster_l,genrenm_l,prfstate_l]).T
    df.columns=['prfnm','prfpdfrom','prfpdto','fcltynm','poster','genrenm','prfstate']
    df=df.sort_values(by='prfpdfrom', ascending=True)
    df_reset=df.set_index('prfnm')

    # csv 파일 생성
    df_reset.to_csv('sample'+ str(line[0]) +'.csv')
    # 메모장
    #df_reset.to_csv('sample'+ str(line[0]) +'.txt')
