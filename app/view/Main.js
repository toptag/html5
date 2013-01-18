Ext.define('TopTag.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
        'Ext.NavigationView'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Tag List',
                xtype: 'taglist'
            }
        ]
    },
    initialize: function () {
        var Tag = TopTag.model.Tag;
        [571954831, 670518882, 489274062, 625622808, 698937859, 144223990, 260773154, 123456789].forEach(function (tag) {
            Tag.loadTag(tag, function (err, record) {
                if (err) {
                    console.warn(err);
                } else {
                    console.log('loaded tag %s', record.get('tagid'));
                }
            });
        });

        this.callParent(arguments);
    }
});
