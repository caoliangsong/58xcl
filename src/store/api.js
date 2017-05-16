// const BASE_URL = 'http://172.17.18.132:8080/UserService'
const BASE_URL = 'https://www.58xcl.com/ns'
const SEARCH_URL = 'https://www.58xcl.com/qs/qs'

var jsonp = function (url, data) {
  return new window.Promise(function (resolve, reject) {
    var jsonpCallback = 'jsonpCallback' + (new Date() * 1) + Math.floor(Math.random() * 10000)
    var script = document.createElement('script')
    var h = document.getElementsByTagName('head')[0]
    data = encodeURIComponent(window.JSON.stringify(data))
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
      resolve(json)
    }
  })
}

var request = {
  func: 'function',
  params: {}
}

const API = {
  getJournalismtList: function (type, page, countPerPage) {
    request.func = 'getJournalismtList'
    request.params['t'] = type
    request.params['p'] = page
    request.params['cpp'] = countPerPage
    return jsonp(BASE_URL + '/consult?f=t', request)
  },
  getJournalismtById: function (id) {
    request.func = 'getJournalismtById'
    request.params['id'] = id
    return jsonp(BASE_URL + '/consult?f=t', request)
  },
  getFundGrades: function (investmentStrategy, productType, establishTime, togetherRating, incomeRating, normalRiskRating, extremeRiskRating, type, isAsc, page, countPerPage, order) {
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
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  },
  SiMuWangCompanyByCompanySID: function (sid) {
    request.func = 'SiMuWangCompanyByCompanySID'
    request.params['csid'] = sid
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  },
  getCompanyFundGrades: function (sid) {
    request.func = 'getCompanyFundGrades'
    request.params['sid'] = sid
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  },
  fullTextSearch: function (kw) {
    return jsonp(SEARCH_URL + '?func=fullTextSearch&kw=' + kw + '&t=0&p=1&c=8', request)
  },
  getSiMuWangProductInfoBySID: function (sid) {
    request.func = 'getSiMuWangProductInfoBySID'
    request.params['psid'] = sid
    return jsonp(BASE_URL + '/datacapture?f=t', request)
  },
  getPrivateFundGrade: function (sid) {
    request.func = 'getPrivateFundGrade'
    request.params['sid'] = sid
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  },
  getProductNets: function (sid) {
    request.func = 'getProductNets'
    request.params['sid'] = sid
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  },
  getCSI: function (beginTime, endTime) {
    request.func = 'getCSI'
    request.params['bt'] = beginTime
    request.params['et'] = endTime
    return jsonp(BASE_URL + '/product?f=t', request)
  },
  getFundIndexByType: function (type) {
    request.func = 'getFundIndexByType'
    request.params['t'] = type
    request.params['g'] = 0
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  },
  getFundIndexBaseByType: function (type, subType, grade) {
    request.func = 'getFundIndexBaseList'
    request.params['t'] = type
    request.params['st'] = subType
    request.params['g'] = grade
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  },
  getSiMuWangManagerBySID: function (psid) {
    request.func = 'getSiMuWangManagerBySID'
    request.params['psid'] = psid
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  },
  SiMuWangCompanyBySID: function (psid) {
    request.func = 'SiMuWangCompanyBySID'
    request.params['psid'] = psid
    return jsonp(BASE_URL + '/datagrade?f=t', request)
  }
}
export default API
