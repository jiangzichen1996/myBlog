        function Dialog(settings){
            this.defaulstSettings = {
                width: 450,
                height: 400,
                titleLeft: "学生登录",
                titleRight: "教师登录",
                content: ""
            };
            $.extend(this.defaulstSettings, settings);
            this.$container = $('<div class="dialog-container"></div>');
            this.$mask = $('<div class="dialog-mask"></div>');
            this.$title = $('<div class="dialog-title"></div>');
            this.$box = $('<div class="dialog-box"></div>');
            this.$titleLeft = $('<div class="dialog-title-left">'+this.defaulstSettings.titleLeft +'</div>');
            this.$titleRight = $('<div class="dialog-title-right">'+this.defaulstSettings.titleRight +'</div>');            
            this.$item = $('<div class="dialog-title-item"></div>');
            this.$close = $('<div class="dialog-title-close">X</div>');
            this.$content = $('<form id="LoginForm" class="dialog-content" action="/checkLogin" method="post"></form>');
            this.$content2 = $('<form id="LoginForm" class="dialog-content" action="/checkAdminLogin" method="post"></form>');            
            this.$userId=$('<div class="inputbox"><input name="userName" class="userId" type="text" placeholder="请输入您的账号"></div>')
            this.$userPwd=$('<div class="inputbox"><input name="userPwd" class="userPwd" type="password" placeholder="请输入您的密码"></div>')
            this.$btn=$('<button class="btn">登录</button>');
            this.$span=$('<span class="reg"><a href="">忘记密码？ 去注册</a></span>')
            this.$userId2=$('<div class="inputbox2"><input class="userId2" type="text" placeholder="账号"></div>')
            this.$userPwd2=$('<div class="inputbox2"><input class="userPwd2" type="password" placeholder="密码"></div>')
            this.$btn2=$('<button class="btn2">登录</button>');
            
        }
        Dialog.prototype.open = function(){
            this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
            this.$box.append(this.$title).append(this.$content);
            this.$title.append(this.$item).append(this.$close);
            
            this.$item.append(this.$titleLeft).append(this.$titleRight);
            this.$box.css({
                width: this.defaulstSettings.width,
                height: this.defaulstSettings.height
            });
            this.$titleLeft.addClass('green');
            this.$content.append(this.$userId).append(this.$userPwd).append(this.$btn).append(this.$span);
            this.$titleLeft.on('click',function(){
                this.$titleLeft.addClass('green');
                this.$titleRight.removeClass('green');
                this.$content.empty().append(this.$userId).append(this.$userPwd).append(this.$btn).append(this.$span);
                this.$box.css({height:'380px'})
                
            }.bind(this));
            this.$titleRight.on('click',function(){
                this.$titleLeft.removeClass('green');
                this.$titleRight.addClass('green');
                this.$content.remove();
                this.$box.append(this.$content2).append(this.$userId2).append(this.$userPwd2).append(this.$btn2);
                this.$box.css({height:'340px'});

            }.bind(this));
           this.$close.on("click", function(){
               // this.$container.remove();
                this.close();
           }.bind(this));
        };
        Dialog.prototype.close = function(){
            this.$container.remove();
        };
        $(".login").add(".register").on("click", function(){
           var settings = {
               width: 580,
               height: 380,
               titleLeft: "游客登录",
               titleRight: "管理员登录",               
               content: ""
           };
           var dialog = new Dialog(settings);
           dialog.open();
        });
        $('.remove').remove()