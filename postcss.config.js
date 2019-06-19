module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {
            /*
            *
            * 逻辑像素(pt) / 物理像素(px)
            * 320pt = 640px 、375pt = 750px
            * 设计图是按物理像素来设计的，所以如果设计图是640物理像素宽度，rootValue就设置为32.0
            * 同理如果设计图是750物理像素宽度，rootValue就设置为37.5，总之，设计图要除以2。
            *
            * 下面设置的37.5，意思就是按37.5px = 1rem进行px的转换
            *
            */
            rootValue: 37.5,
            propList: ['*'],
            // 该项仅在使用Vant的 Circle 组件时需要
            // 该属性配置表示不转换数组里的类名为rem
            selectorBlackList: ['van-circle__layer']
        }
    }
}
