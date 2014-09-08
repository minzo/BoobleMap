//==============================================================================
//
//  Math拡張 [Math.js]
//
//==============================================================================

(function( window, undefined ) {

//------------------------------------------------------------------------------
//  値を指定した範囲内にまるめる
//
//  @param[in] val まるめる値
//  @param[in] min 指定する範囲の下限の値
//  @param[in] max 指定する範囲の上限の値
//------------------------------------------------------------------------------
Math.clamp = Math.clamp || function( val, min, max ) {
    return Math.min( max, Math.max( min, val ) );
};

//------------------------------------------------------------------------------
//  乱数を取得する
//
//  引数が1つの場合 [ 0,arg0 ) の整数の乱数を返す
//  引数が2つの場合 [ arg0, arg1 ] の整数の乱数を返す
//------------------------------------------------------------------------------
Math.rand = Math.rand || function( arg0, arg1 ) {
    switch( arguments.length ) {
    case 0: return Math.floor( Math.random() * 32767 );
    case 1: return Math.floor( Math.random() * arg0 );
    case 2: return Math.floor( Math.random() * ( arg1 - arg0 + 1 ) ) + arg0;
    default:
    };
    console.error( "Math.rand() invailid arguments" );
    return 0;
};

//------------------------------------------------------------------------------
//  角度をまるめる
//------------------------------------------------------------------------------
Math.wrapRad = function( rad ) {
    rad %= Math.PI * 2.0;
    if     ( rad >= Math.PI ) { rad -= Math.PI * 2.0; }
    else if( rad < -Math.PI ) { rad += Math.PI * 2.0; }
    return rad;
};
Math.wrapDeg = function( deg ) {
    deg %= 360;
    if     ( deg >= 180.0 ) { deg -= 360.0; }
    else if( deg < -180.0 ) { deg += 360.0; }
    return deg;
};

//------------------------------------------------------------------------------
//  角度の単位を変換する
//------------------------------------------------------------------------------
Math.radToDeg = Math.radToDeg || function( rad ){ return 180 / Math.PI * rad; };
Math.degToRad = Math.degToRad || function( deg ){ return Math.PI / 180 * deg; };
Math.wrapRadToDeg=function( rad ){ return Math.radToDeg( Math.wrapRad(rad) ); };
Math.wrapDegToRad=function( deg ){ return Math.degToRad( Math.wrapDeg(deg) ); };

//------------------------------------------------------------------------------
//  内積・外積
//------------------------------------------------------------------------------
VEC2          = function(){ this.x=0; this.y=0; };
VEC2.normal   = function( V ){ var d=VEC2.dist( V ); return{x:V.y/d,y:-V.x/d};};
VEC2.normalize= function( V ){ var d=VEC2.dist( V ); return{x:V.x/d,y:V.y/d}; };
VEC2.dist     = function( V ){ return Math.sqrt( V.x * V.x + V.y * V.y ); };
VEC2.dot      = function( V1, V2 ) { return V1.x * V2.x + V1.y * V2.y; };
VEC2.cross    = function( V1, V2 ) { return V1.x * V2.y - V2.x * V1.y; };

})( window );
