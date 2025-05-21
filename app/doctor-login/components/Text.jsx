
'use client'
import React from 'react'

function Text({ fonts, fontWeight, TextSize, TextChildrem = 'Home', color, Line_height = '100%',
    marginTops, marginsBottom, paddingLeft, paddingRight,font_weight,...props
}) {
    return (
        <div>
            <span style={{
                fontFamily: fonts,
                fontWeight: fontWeight,
                fontSize: TextSize,
                color: color,
                lineHeight: Line_height
                , marginTop: marginTops,
                marginBottom: marginsBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
textDecoration:props.lines
            }}  className={`text-${font_weight}`}>{TextChildrem}</span>
        </div>
    )
}

export default Text
