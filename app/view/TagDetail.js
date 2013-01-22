Ext.define('TopTag.view.TagDetail', {
    extend: 'Ext.Panel',
    xtype: 'tagdetail',
    config: {
        title: null,
        tagid: null,
        channels: null,
        socialmessage: null,
        scrollable: true,
        items: [{
            xtype: 'image',
            width: 320,
            height: 180
        }, {
            itemTpl: '<img src="http://util.toptag.com/{U}.png" height="40px">{D}',
            xtype: 'dataview',
            scrollable: false
        },{
            xtype: 'panel',
            docked: 'bottom',
            items: [{
                xtype: 'panel',
                html: 'click to share this page.',
                cls: 'share-panel'
            },{
                xtype: 'panel',
                layout: 'hbox',
                defaults: {
                    xtype: 'button',
                    flex: 1,
                    iconMask: true,
                    margin: '1%',
                    ui: 'round',
                    iconAlign: 'top'
                },
                items: [{
                    iconCls: 'team',
                    text: 'Facebook',
                    id: 'facebook'
                }, {
                    iconCls: 'twitter2',
                    text: 'Twitter',
                    id: 'twitter'
                }, {
                    iconCls: 'chat_black1',
                    text: 'SMS',
                    id: 'sms'
                }, {
                    iconCls: 'mail',
                    text: 'Email',
                    id: 'email'
                }]
            }
                ]
        }],
        cls: 'tag-detail'
    },

    initialize: function () {
        var tagId = this.getTagid();
        this.down('dataview').setData(this.getChannels());
        var backgroundUrl = 'http://images.toptag.com/tags/' + tagId + 'B2.jpg';
        this.down('image').setSrc(backgroundUrl);
        this.callParent(arguments);
    }
});