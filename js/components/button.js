(function (win, dependencies, components) {
  var Vue = dependencies.Vue
  var RongIM = dependencies.RongIM
  var utils = RongIM.Utils
  var Service = RongIM.Service

  var OutputMark = {
    SUCCESS: '成功',
    FAILED: '失败'
  }

  var copyApi = function (api) {
    var params = api.params || []
    var copyParams = utils.copy(params)
    utils.forEach(params, function (item, index) {
      utils.forEach(item, function (val, key) {
        if (utils.isFunction(val)) {
          copyParams[index][key] = val
        }
      })
    })
    api.params = copyParams
    return api
  }

  components.apiBtn = Vue.component('api-btn', {
    template: utils.getTemp('rong-tpl-apibtn'),
    props: ['api', 'isdragging'],
    data: function () {
      return {
        isShowEditDialog: false,
        selfApi: copyApi(this.api),
        isOpen: false
      }
    },
    watch: {
      markMessage: function (newMsg) {
        console.log(newMsg)
      }
    },
    computed: {
      tip: function () {
        var api = this.selfApi
        return utils.tplEngine(TipTpl, api)
      },
      apiValue: function () {
        var api = this.selfApi
        return utils.toJSON(api)
      },
      paramList: function () {
        var paramList = this.selfApi.params
        return paramList
      },
      hasParams: function () {
        var params = this.selfApi.params
        return params && params.length
      }
    },
    methods: {
      openUrl: utils.openUrl,
      showEditDialog: function () {
        this.isShowEditDialog = true
      },
      hideEditDialog: function () {
        this.isShowEditDialog = false
      },
      change: function () {
      },

      selectFile: function (e, param) {
        if (!e.target.value) {
          return
        }
        const file = e.target.files[0]
        if (!file) {
          return
        }
        param.file = file
      },
      run: function () {
        var self = this
        var params = []
        var startTime = +new Date()
        if (self.api.eventName === 'setMessageKV') {
          console.warn('send msg kv')
          this.isOpen = true
          return
        }
        utils.forEach(self.selfApi.params, function (item) {
          let param = item.value
          if (item.type === 'number') {
            param = Number(item.value)
          } else if (item.type === 'file') {
            param = item.file
          }

          params.push(param)
        })
        var imInstance = RongIM.vueInstance

        var addOutput = function (data, isSuccess) {
          var currentTime = +new Date()
          var consumedTime = currentTime - startTime
          var title = self.api.name + (isSuccess ? OutputMark.SUCCESS : OutputMark.FAILED)
          var config = {}
          if (!isSuccess) {
            config.color = utils.TypeColor.FAILED
          }
          self.hideEditDialog()
          return imInstance.addOutput(title, data, consumedTime, params, config)
        }
        return self.api.event.apply(void 0, params).then(function (data) {
          if (!data || (data && data.code === 0)) {
            data = addOutput(data, true)
            return {
              isSuccess: true,
              data: data
            }
          } else {
            return Promise.reject(data)
          }
        }).catch(function (errorInfo) {
          // TODO 报警
          // error = utils.isNumber(error) ? error : error.toString();
          var data = addOutput(errorInfo, false)
          return {
            isSuccess: false,
            data: data
          }
        })
      }
    },
    mounted: function () {
      var self = this

      var setParams = function () {
        var paramList = self.selfApi.params
        utils.forEach(paramList, function (item) {
          if (item.event) {
            item.value = item.value || item.event()
          }
        })
      }

      setParams()
      Service.msgEmitter.on('msgChanged', setParams)
    }
  })
})(window, {
  Vue: Vue,
  iview: iview,
  RongIM: RongIM
}, window.RongIM.components)
