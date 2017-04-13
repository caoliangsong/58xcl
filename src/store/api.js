// const BASE_URL = 'http://172.17.18.132:8080/UserService'
const BASE_URL = 'https://www.58xcl.com/ns'
const SEARCH_URL = 'https://www.58xcl.com/qs/qs'

var jsonp = function (url, data, success) {
  data = encodeURIComponent(window.JSON.stringify(data))
  var jsonpCallback = 'jsonpCallback' + (new Date() * 1) + Math.floor(Math.random() * 10000)
  var script = document.createElement('script')
  var h = document.getElementsByTagName('head')[0]
  if (url.indexOf('?') > -1) {
    url += '&CallBack=' + jsonpCallback + '&data=' + data
  } else {
    url += '?CallBack=' + jsonpCallback + '&data=' + data
  }
  script.src = url
  h.appendChild(script)
  window[jsonpCallback] = window[jsonpCallback] || function (json) {
    window[jsonpCallback] = undefined
    try {
      delete window[jsonpCallback]
    } catch (e) {}
    if (h) {
      h.removeChild(script)
    }
    success(json)
  }
}

var request = {
  func: 'function',
  params: {}
}

var API = {
  getJournalismtList: function (type, page, countPerPage, fn) {
    request.func = 'getJournalismtList'
    request.params['t'] = type
    request.params['p'] = page
    request.params['cpp'] = countPerPage
    jsonp(BASE_URL + '/consult?f=t', request, fn)
  },
  getJournalismtById: function (id, fn) {
    request.func = 'getJournalismtById'
    request.params['id'] = id
    jsonp(BASE_URL + '/consult?f=t', request, fn)
  },
  getFundGrades: function (investmentStrategy, productType, establishTime, togetherRating, incomeRating, normalRiskRating, extremeRiskRating, type, isAsc, page, countPerPage, order, fn) {
    request.func = 'getFundGrades'
    request.params['is'] = investmentStrategy
    request.params['pt'] = productType
    request.params['et'] = establishTime
    request.params['tr'] = togetherRating
    request.params['ir'] = incomeRating
    request.params['nrr'] = normalRiskRating
    request.params['err'] = extremeRiskRating
    request.params['t'] = type
    request.params['ia'] = isAsc
    request.params['p'] = page
    request.params['cpp'] = countPerPage
    request.params['o'] = order
    jsonp(BASE_URL + '/datagrade?f=t', request, fn)
  },
  getFundIndexBaseByType: function (type, fn) {
    request.func = 'getFundIndexBaseByType'
    request.params['t'] = type
    jsonp(BASE_URL + '/datagrade?f=t', request, fn)
  },
  SiMuWangCompanyByCompanySID: function (sid, fn) {
    request.func = 'SiMuWangCompanyByCompanySID'
    request.params['csid'] = sid
    jsonp(BASE_URL + '/datagrade?f=t', request, fn)
  },
  getCompanyFundGrades: function (sid, fn) {
    request.func = 'getCompanyFundGrades'
    request.params['sid'] = sid
    jsonp(BASE_URL + '/datagrade?f=t', request, fn)
  },
  fullTextSearch: function (kw, fn) {
    jsonp(SEARCH_URL + '?func=fullTextSearch&kw=' + kw + '&t=0&p=1&c=8', request, fn)
  },
  getSiMuWangProductInfoBySID: function (sid, fn) {
    request.func = 'getSiMuWangProductInfoBySID'
    request.params['psid'] = sid
    jsonp(BASE_URL + '/datacapture?f=t', request, fn)
  },
  getPrivateFundGrade: function (sid, fn) {
    request.func = 'getPrivateFundGrade'
    request.params['sid'] = sid
    jsonp(BASE_URL + '/datagrade?f=t', request, fn)
  },
  getProductNets: function (sid, fn) {
    request.func = 'getProductNets'
    request.params['sid'] = sid
    jsonp(BASE_URL + '/datagrade?f=t', request, fn)
  },
  getCSI: function (beginTime, endTime, fn) {
    request.func = 'getCSI'
    request.params['bt'] = beginTime
    request.params['et'] = endTime
    jsonp(BASE_URL + '/product?f=t', request, fn)
  }
}
export default API
