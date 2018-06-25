<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <a href="/pages/computer/main" class="computer">去往computer页面</a>

    <div id="example" @click="doSomething">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      message: 'Hello',
      isActive: true,
      error: null
    }
  },

  computed: {
    reversedMessage: function () {
      this.message = 'Goodbye'
      return this.message.split('').reverse().join('')
    },
    classObject: function () {
      let obj = {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
      console.dir(obj)
      return obj
    }
  },

  components: {
    card
  },

  methods: {
    doSomething () {
      console.log('doSomething')
    },

    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
              this.motto = 'sddfsdfsdf'
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 50px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

.computer {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: black;
  border: 1px solid red;
}
</style>
