Ext.define('TopTag.view.DeleteButton', {

    extend: 'Ext.Button',

    xtype: 'deletebutton',

    config: {
        text: '',
        hidden: 'true',
        iconMask: true,
        iconCls: 'trash',
        align: 'right'
    }
});