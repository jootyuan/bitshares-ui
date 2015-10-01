module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch",
        es: "Español"
    },
    header: {
        title: "比特股 2.0",
        dashboard: "概览",
        explorer: "浏览",
        exchange: "交易",
        payments: "支付",
        logout: "注销",
        settings: "设置",
        current: "当前账户",
        create_account: "创建账户",
        create_asset: "创建资产",
        lock: "锁定钱包",
        unlock: "解锁",
        account: "账户"
    },
    account: {
        assets: "资产",
        market_value: "市值",
        hour_24: "24小时",
        recent: "近期活动",
        name: "账户名",
        member: {
            stats: "资料",
            join: "加入于",
            reg: "注册人",
            ref: "推荐人",
            referrals: "被推荐人",
            rewards: "返现奖励",
            cashback: "返现",
            vested: "既得",
            ref_percentage: "推荐人奖励",
            network_percentage: "网络收取",
            fees_paid: "手续费总支出",
            fees_pending: "待结费用",
            fees_vested: "待解冻金额",
            in_orders: "委单冻结金额 %(core_asset)s ",
            unknown: "未知的会员",
            lifetime: "终身会员",
            basic: "普通会员",
            annual: "年度订阅者",
            registrar: "注册人",
            referrer: "推荐人",
            lifetime_referrer: "终身会员推荐人",
            membership: "会籍",
            fee_allocation: "手续费分配",
            upgrade_lifetime: "购买终身会籍",
            subscribe: "购买1年会籍",
            expires: "过期",
            membership_expiration: "会籍过期时间"
        },
        connections: {
            known: "识别为",
            black: "被屏蔽"
        },
        asset: "资产",
        more: "查看更多",
        user_issued_assets: {
            symbol: "资产代码",
            name: "资产名称",
            description: "描述",
            max_supply: "最大供给量",
            precision: "精度",
            to: "发行到账户",
            details: "详细"
        },
        perm: {
            active: "活跃权限",
            owner: "拥有人权限",
            publish: "保存修改",
            reset: "重置修改",
            add: "增加权限",
            type: "类型",
            key: "键/名字",
            weight: "权重",
            threshold: "阈值",
            confirm_add: "增加",
            cancel: "取消"
        },
        votes: {
            proxy: "代理投票账户",
            no_proxy: "无代理",
            name: "账户名",
            info: "信息",
            votes: "votes",
            url: "主页",
            support: "支持",
            workers: "预算项目",
            publish: "保存修改",
            add_witness: "添加",
            remove_witness: "移除",
            remove_committee: "移除",
            add_committee: "添加",
            add_committee_label: "受托人",
            add_witness_label: "见证人",
            approve_worker: "赞成",
            reject_worker: "反对"
        },
        options: {
            num_witnesses: "信任见证人",
            num_committee: "信任受托人",
            memo_key: "备注公钥"
        },
        upgrade: "升级账户",
        unlink: "取消关注",
        link: "关注",
        pay: "向他付款",
        overview: "概述",
        history: "交易历史",
        payees: "收款人",
        permissions: "权限",
        voting: "投票",
        orders: "订单",
        select_placeholder: "选择账户...",
        errors: {
            not_found: "账户 %(name)s 不存在, 你确定输入正确么?",
            invalid: "非法的账户名",
            unknown: "未知的账户",
            not_yours: "不是你的账户"
        }
    },
    transfer: {
        from: "来自",
        amount: "金额",
        to: "发往",
        memo: "备注消息",
        fee: "手续费",
        send: "发送",
        "final": "转账后余额",
        balances: "余额",
        errors: {
            req: "必填信息",
            pos: "数量必须大于0",
            valid: "请输入一个合法的大于0的半角数字",
            balance: "最终余额必须大于0"
        },
        back: "返回",
        confirm: "确认发送",
        broadcast: "你的转账已经向网络广播",
        again: "发起新的转账",
        see: "查看我的转账记录",
        available: "可用余额: ",
        broadcasting: "交易广播中...",
        close: "关闭",
        pay_from: "支付自"
    },
    transaction: {
        sent: "发送",
        to: "发往",
        received: "已接收",
        from: "来自",
        amount_sell: "出售数量",
        expiration: "过期时间",
        fill_or: "成交或取消",
        min_receive: "接收的最小数量",
        seller: "卖家",
        collateral: "保证金",
        coll_ratio: "原始保证金率",
        coll_maint: "维持保证金率",
        create_key: "创建一个公钥",
        reg_account: "注册账户",
        was_reg_account: "注册账户，来自",
        create_asset: "资产创建",
        limit_order: "限价单",
        limit_order_buy: "提交限价买单 #%(num)s, 买入数量: %(buy_amount)s, 价格: ",
        limit_order_sell: "提交限价卖单 #%(num)s, 卖出数量: %(sell_amount)s, 价格: ",
        limit_order_cancel: "取消限价单",
        short_order: "空单",
        short_order_cancel: "取消空单",
        at: "@",
        coll_of: "保证金为",
        call_order_update: "更新保证金头寸",
        upgrade_account: "升级到终身会员账户",
        update_account: "更新账户",
        whitelist_account: "加入白名单",
        whitelisted_by: "加入到账户白名单",
        transfer_account: "转移账户",
        update_asset: "更新资产",
        update_feed_producers: "更新资产喂价人",
        feed_producer: "成为资产喂价人",
        asset_issue: "发行",
        was_issued: "收到资产",
        by: "来自",
        burn_asset: "销毁",
        fund_pool: "转入资产资金池",
        asset_settle: "请求资产清算",
        asset_global_settle: "请求全局资产清算",
        publish_feed: "资产喂价",
        committee_member_create: "创建受托人",
        witness_create: "创建见证人",
        witness_pay: "提取见证人收入到账户",
        witness_receive: "Received witness from witness",
        proposal_create: "创建提案",
        proposal_update: "更新提案",
        proposal_delete: "删除提案",
        withdraw_permission_create: "授予账户提取权限",
        withdraw_permission_update: "更新账户提取权限",
        withdraw_permission_claim: "主张账户提取权限",
        withdraw_permission_delete: "删除账户提取权限",
        paid: "支付",
        obtain: "获得",
        global_parameters_update: "更新全局参数",
        file_write: "写入文件",
        vesting_balance_create: "创建待解冻余额",
        "for": "for",
        vesting_balance_withdraw: "提取解冻资金",
        bond_create_offer: "创建债券要约",
        bond_cancel_offer: "取消债券要约",
        bond_accept_offer: "接受债券要约",
        bond_claim_collateral: "索取抵押物",
        bond_pay_collateral: "支付保证金",
        create_worker: "创建雇员，要求报酬为",
        custom: "创建自定义操作",
        order_id: "订单ID",
        trxTypes: {
            transfer: "转账",
            limit_order_create: "限价单",
            limit_order_cancel: "取消限价单",
            call_order_update: "更新订单",
            account_create: "创建账户",
            account_update: "更新账户",
            account_whitelist: "账户白名单",
            account_upgrade: "升级账户",
            account_transfer: "账户转移",
            asset_create: "创建资产",
            asset_update: "更新资产",
            asset_update_bitasset: "更新智能币",
            asset_update_feed_producers: "更新资产喂价者",
            asset_issue: "资产发行",
            asset_reserve: "销毁资产",
            asset_fund_fee_pool: "积存资产费用池",
            asset_settle: "资产结算",
            asset_global_settle: "全局资产清算",
            asset_publish_feed: "发布资产喂价",
            committee_member_create: "创建受托人",
            witness_create: "创建见证人",
            witness_withdraw_pay: "见证人取回报酬",
            proposal_create: "创建提案",
            proposal_update: "更新提案",
            proposal_delete: "删除提案",
            withdraw_permission_create: "创建提取权限",
            withdraw_permission_update: "更新提取权限",
            withdraw_permission_claim: "主张提取权限",
            withdraw_permission_delete: "删除提取权限",
            fill_order: "订单撮合",
            delegate_update_global_parameters: "全局参数更新",
            vesting_balance_create: "创建冻结账目余额",
            vesting_balance_withdraw: "提取解冻账户余额",
            worker_create: "创建雇员",
            custom: "自定义",
            assert: "断言操作",
            balance_claim: "领取余额",
            override_transfer: "优先覆盖转账",
            witness_update: "更新见证人"
        },
        confirm: "请确认交易",
        broadcast_success: "交易已向网络广播",
        transaction_confirmed: "交易已确认Transaction",
        broadcast_fail: "交易广播失败: %(message)s",
        balance_claim: "从余额ID #%(balance_id)s 中领取金额 %(balance_amount)s ",
        balance_owner: "余额所有者公钥",
        balance_id: "余额ID",
        deposit_to: "向账户存入",
        claimed: "领取总额",
        broadcasting: "交易广播中..",
        broadcasting_short: "交易广播中..",
        borrow_amount: "借入金额",
        funding_account: "出资账户",
        delta_collateral: "保证金变化",
        delta_debt: "债务变化",
        feed_price: "喂价",
        witness_update: "更新见证人账户",
        new_url: "网站",
        publisher: "发布人",
        lifetime_upgrade_account: "升级到终生会员",
        annual_upgrade_account: "升级到年度会员"
    },
    explorer: {
        accounts: {
            title: "账户"
        },
        blocks: {
            title: "区块链",
            globals: "全局参数",
            recent: "最近区块"
        },
        block: {
            title: "区块",
            id: "区块 ID",
            witness: "见证人",
            count: "交易数",
            date: "日期",
            previous: "上一个",
            previous_secret: "上一个密文",
            next_secret: "下一个密文哈希值",
            op: "操作",
            trx: "交易",
            op_type: "操作类型",
            fee_payer: "手续费支付账户",
            key: "公钥",
            transactions: "交易数量",
            account_upgrade: "可升级账户",
            lifetime: "升级到终身会员账户",
            authorizing_account: "授权账户",
            listed_account: "Listed account",
            new_listing: "New listing",
            asset_update: "可更新资产",
            common_options: "Common options",
            new_options: "New options",
            new_producers: "New feed producers",
            asset_issue: "发行数量",
            max_margin_period_sec: "Max margin period (s)",
            call_limit: "Call limit",
            short_limit: "Short limit",
            settlement_price: "结算价格",
            time: "时间"
        },
        assets: {
            title: "资产",
            market: "智能币 SmartCoins",
            user: "用户发行资产",
            symbol: "代码",
            id: "ID",
            issuer: "发行人",
            precision: "精度"
        },
        asset: {
            title: "资产",
            not_found: "资产 %(name)s 不存在"
        },
        witnesses: {
            title: "见证人"
        },
        committee_members: {
            title: "受托人"
        },
        committee_member: {
            title: "受托人"
        },
        workers: {
            title: "雇员"
        },
        proposals: {
            title: "提案"
        },
        account: {
            title: "账户"
        }
    },
    settings: {
        inverseMarket: "市场交易对视角",
        unit: "显示记账单位",
        confirmMarketOrder: "市场订单要求确认",
        locale: "语言选择",
        confirm_yes: "总是",
        confirm_no: "从不",
        always_confirm: "总是要求确认",
        wallets: "钱包管理"
    },
    pagination: {
        newer: "更近",
        older: "更早"
    },
    footer: {
        title: "Graphene 石墨烯",
        block: "最新区块",
        loading: "载入中..."
    },
    exchange: {
        price_history: "价格历史",
        order_depth: "订单深度",
        market_history: "市场历史",
        balance: "我的余额",
        lowest_ask: "最低卖单",
        highest_bid: "最高买单",
        total: "成交额",
        value: "数量",
        price: "价格",
        latest: "最新价格",
        call: "赎回价格",
        volume: "成交量",
        spread: "价差",
        quantity: "数量",
        buy: "买入",
        sell: "卖出",
        confirm_buy: "确认订单: 以 %(price_amount)s %(price_symbol)s 的价格，买入 %(buy_amount)s %(buy_symbol)s ",
        confirm_sell: "确认订单: 以 %(price_amount)s %(price_symbol)s 的价格，卖出 %(sell_amount)s %(sell_symbol)s "
    },
    markets: {
        choose_base: "选择基准资产",
        filter: "筛选",
        core_rate: "CORE 汇率",
        supply: "供应量",
        search: "搜索"
    },
    wallet: {
        title: "钱包",
        confirm: "确认密码",
        password: "密码",
        existing_password: "Existing Password",
        change_password: "Change Password",
        change_wallet: "Change Wallet",
        wallet_created: "钱包已创建",
        create_wallet: "创建新钱包",
        delete_wallet: "Delete Wallet",
        delete_confirm_line1: "Are you ABSOLUTELY sure?",
        delete_confirm_line2: "Unexpected bad things will happen if you don’t read this!",
        delete_confirm_line3: "This action CANNOT be undone.",
        delete_wallet_name: "Delete Wallet (%(name)s)",
        name: "钱包名字",
        create: "创建",
        console: "钱包管理控制台",
        create_backup: "创建钱包备份",
        create_backup_of: "为钱包 (%(name)s) 创建备份",
        import_backup: "导入钱包备份文件",
        restore_backup: "从钱包备份恢复",
        import_keys: "导入私钥",
        brainkey: "从脑钱包密钥恢复",
        new_wallet: "新建钱包",
        active_wallet: "当前钱包使用中",
        verified: "已验证",
        verify_prior_backup: "验证钱包备份文件",
        cancel: "Cancel",
        reset: "重置",
        done: "完成",
        verify: "验证",
        invalid_format: "文件内容格式不符",
        enter_password: "请输入密码",
        download: "下载",
        new_wallet_name: "新钱包名字",
        wallet_exist: "同名钱包已存在，请选择不同名字",
        wallet_exist_with_name: "同名钱包(%(name)s)已存在，请选择不同名字",
        accept: "接受",
        ready_to_restore: "准备导入",
        restore_wallet_of: "导入名为 (%(name)s 的钱包)",
        restore_success: "已成功导入钱包 (%(name)s) ",
        change: "切换到钱包 (%(name)s)"
    },
    borrow: {
        title: "%(asset_symbol)s 保证金头寸",
        no_valid: "无有效喂价 %(asset_symbol)s",
        coll_ratio: "保证金率",
        adjust: "调整头寸",
        errors: {
            below: "保证金率低于维持保证金要求",
            collateral: "可用保证金不足"
        }
    }
};
