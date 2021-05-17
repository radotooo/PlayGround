varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

vec4 red(){
   return vec4(1.0,0.0,0.0,1.0);
}

void main(void)
{
   //gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
   //gl_FragColor = vec4(1.0,0.0,1.0,1.0);
//    gl_FragColor = red() 
};