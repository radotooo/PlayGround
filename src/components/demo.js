export const frag = `
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;
uniform float u_time;
vec4 red(){
   return vec4(1.0,0.0,0.0,1.0);
}

void main(void)
{
   //gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
   //gl_FragColor = vec4(1.0,0.0,1.0,1.0);
   //gl_FragColor = red() 
   gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
}`;
