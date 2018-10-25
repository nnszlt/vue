<template>
    <div>
    	<h2>{{store}}</h2>
        <yd-cell-group>
            <yd-cell-item>
                <span slot="left">手机号：</span>
                <yd-input slot="right" v-model="input9" ref="input9" required regex="mobile" placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>
            <p slot="bottom" style="color:#F00;padding: 0 .3rem;" v-html="result"></p>
        </yd-cell-group>
        <yd-button-group>
            <yd-button size="large" @click.native="clickHander">显示上方手机号验证结果</yd-button>
        </yd-button-group>
    </div>
    
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input9: '',
                result: '',
                da:456,
                store:""
            }
        },
      created: function() {
        this.store=this.$store.state.age
        console.log(this.$store.state.age)
        },
        computed:{
	
        },
        methods: {
            clickHander() {
                const input = this.$refs.input9;
               this.$dialog.confirm({
               	
               	
               	  title: '选填标题',
                    mes: '我有一个小毛驴我从来也不骑！',
                  opts: [
                        {
                            txt: '取消',
                            color: false,
                            callback: () => {
                                this.$dialog.toast({mes: '你点了取消', timeout: 1000});
                            }
                        },
                        {
                            txt: '犹豫一下',
                            stay: true,
                            color: '#CCC',
                            callback: () => {
                                this.$dialog.toast({mes: '别犹豫了', timeout: 1000});
                            }
                        },
                        {
                            txt: '确定',
                            color: true,
                            callback: () => {
                                this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                            }
                        }
                    ]
               	
               	
               });
                
                this.result = `{<br />  valid：${input.valid}，<br />  errorMes：'${input.errorMsg}'，<br />  errorCode：'${input.errorCode}'<br />}`;
            }
        }
    }
</script>