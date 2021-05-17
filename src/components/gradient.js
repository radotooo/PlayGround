// export const data = `#ifdef GL_ES
// precision mediump float;
// #endif

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;

// void main() {
// 	vec2 st = gl_FragCoord.xy/u_resolution;
// 	gl_FragColor = vec4(st.x,st.y,0.0,1.0);
// // }`;
// export const data = `
// void mainImage( out vec4 fragColor, in vec2 fragCoord )
// {
//     // Normalized pixel coordinates (from 0 to 1)
//     vec2 uv = fragCoord/iResolution.xy;

//     // Time varying pixel color
//     vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

//     // Output to screen
//     fragColor = vec4(col,1.0);
// }
// `;
export const data = `
varying vec3 N; 
varying vec3 v;  
   void main (void)   {  
   vec3 L = normalize(gl_LightSource[0].position.xyz - v);  
   vec3 E = normalize(-v); 
   vec3 R = normalize(-reflect(L,N));  
 
   // ambient 
   vec4 Iamb = gl_FrontLightProduct[0].ambient;  
   // diffuse 
   vec4 Idiff = gl_FrontLightProduct[0].diffuse * max(dot(N,L), 0.0);  
   Idiff = clamp(Idiff, 0.0, 1.0);  
   // specular 
   vec4 Ispec = gl_FrontLightProduct[0].specular * pow(max(dot(R,E),0.0),0.3*gl_FrontMaterial.shininess); 
   Ispec = clamp(Ispec, 0.0, 1.0);  
   // total color 
   gl_FragColor = gl_FrontLightModelProduct.sceneColor + Iamb + Idiff + Ispec;  
 } `;
