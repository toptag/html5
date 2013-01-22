Ext.define('TopTag.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
        'Ext.NavigationView'
    ],
    config: {
        tabBarPosition: 'bottom',

        showAnimation: {type: 'fade'},

        navigationBar: {
            items: [{xtype: 'deletebutton'}]
        },

        items: [
            {
                title: 'Tag List',
                xtype: 'taglist'
            }
        ]
    }
});
