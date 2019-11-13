export const $http = {
    // URL:'https://browser.thinkey.org/PublicChainBrowser',
    URL: 'http://data2.thinkey.xyz/BlockChainBrowser',
    UrlEncode: (obj) => {
        if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
            return '';
        }
        let params = [];
        for (let key in obj) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return params.join('&');
    },
    get: (Nothis, Objson) => {
        let Alldata = '';
        if (Objson.data) {
            Alldata = '?' + $http.UrlEncode(Objson.data);
        }
        console.log(Alldata)
        fetch(`${$http.URL}${Objson.url}${Alldata}`, {
            method: 'get',
            mode: 'cors',
            headers: {
                // 'Access-Token': localStorage.getItem('token')
                'content-type': 'application/json; charset=utf-8'
            },
        }).then((res) => {
            // 如果http状态码正常，则直接返回数据
            if (res.status !== 200) {
                throw res.status
            } else {
                let Data;
                switch (Objson.dataType) {
                    case 'json': {
                        Data = res.json()
                    }
                        break;

                    case 'text': {
                        Data = res.test()
                    }
                        break;
                }
                return Data
            }
        }).then((res) => {
            console.log(res)
            Objson.success.call(Nothis, res)
        }).catch((error) => {
            if (Objson.error) {
                Objson.error.call(Nothis, error)
            }
        });
    },

    post: (Nothis, Objson) => {
        console.log(Objson)
        fetch(`${$http.URL}${Objson.url}`, {
            method: 'post',
            mode: 'cors',
            headers: {
                // 'Access-Token' : localStorage.getItem('token')
                'content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(Objson.data)
        }).then((res) => {
            console.log(res)
            if (res.status !== 200) {
                throw res.status
            } else {
                let Data;
                switch (Objson.dataType) {
                    case 'json': {
                        Data = res.json()
                    }
                        break;
                    case 'text': {
                        Data = res.test()
                    }
                        break;
                }
                return Data
            }
        }).then((res) => {
            Objson.success.call(Nothis, res)
        }).catch((error) => {
            if (Objson.error) {
                Objson.error.call(Nothis, error)
            }
        });
    },

    jump: () => {
        fetch(`${$http.URL}请求的url`, {
            method: 'get',
            mode: 'cors',
            headers: {
                'Access-Token': localStorage.getItem('token')
            },
        }).then((res) => {
            if (res.status !== 200) {
                throw res.status
            }
        }).catch((error) => {
            if (isNaN(error)) {
                if (error.message.substring(0, 6) === 'Failed') {
                    alert('服务器出错,请联系相关人员')
                }
                return
            }
            if (error === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('thisToken');
                localStorage.setItem('exitState', '2')
                window.location.href = window.location.protocol + '//' + window.location.host + 'login'
            }
        })
    }
}