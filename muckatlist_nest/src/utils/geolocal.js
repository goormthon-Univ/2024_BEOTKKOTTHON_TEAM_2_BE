const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'openstreetmap'
};

const geocoder = NodeGeocoder(options);

const universityList = ['경기도 성남시 수정구 성남대로 1342',
    '경기도 수원시 영통구 광교산로 154-42',
    '경기도 용인시 기흥구 덕영대로 1732',
    '세종특별자치시 세종로 2511',
    '서울특별시 노원구 광운로 20',
    '서울특별시 성북구 정릉로 77',
    '경기도 용인시 수지구 죽전로 152',
    '서울특별시 도봉구 삼양로 144길 33',
    '서울특별시 중구 필동로 1길30',
    '서울특별시 성북구 화랑로13길 60',
    '서울특별시 노원구 화랑로 815',
    '서울특별시 종로구 홍지문2길 20',
    '충청남도 천안시 동남구 상명대길 31',
    '서울특별시 노원구 공릉로 232',
    '서울특별시 노원구 화랑로 621',
    '경기도 안양시 만안구 성결대학로 53',
    '서울특별시 구로구 연동로 320',
    '서울특별시 광진구 능동로 209',
    '충청남도 당진시 신평면 세한대길 33',
    '경기도 화성시 봉담읍 와우안길 17',
    '충청남도 아산시 순천향로 22',
    '경기도 수원시 영통구 월드컵로 206',
    '서울특별시 서대문구 이화여대길 52',
    '인천광역시 연수구 아카데미로 119',
    '광주광역시 북구 용봉로 77',
    '서울특별시 동작구 흑석로 84',
    '경기도 용인시 처인구 모현읍 외대로 81',
    '강원특별자치도 춘천시 한림대학길 1',
    '서울특별시 성북구 삼선교로 16길 116',
    '충청남도 아산시 배방읍 호서로 79번길 20',
    '서울특별시 마포구 와우산로 94',
    '세종특별자치시 조치원읍 세종로 2639',
    '서울특별시 종로구 성균관로 25-2']

universityList.forEach(key => geocoder.geocode(key, function(err, res) {
    if (err) {
        console.log('Error:', err);
      } else if (res.length > 0) {
        const firstResult = res[0];
        console.log(key)
        console.log('위도:', firstResult.latitude);
        console.log('경도:', firstResult.longitude);
      } else {
        console.log(key)
        console.log(res.latitude);
        console.log(res.longitude)
      }
      // res의 첫 번째 항목의 위도와 경도 출력
    }
  ));