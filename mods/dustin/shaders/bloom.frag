#pragma header

#define PI 3.1415926535897932384626433832795
#define TWOPI (PI * 2.0)

uniform float brightness;
uniform float directions;
uniform float quality;
uniform float size;

void main(void) {
    vec2 uv = openfl_TextureCoordv.xy;
    vec4 color = flixel_texture2D(bitmap, uv);
    
    if (brightness <= 1.0 && size <= 0.0) {
        gl_FragColor = color;
        return;
    }

    vec4 bloom = vec4(0.0);
    float dirStep = TWOPI / directions;
    float qualStep = 1.0 / quality;
    float invQual = quality;
    float sizeDivY = size / openfl_TextureSize.y;
    float sizeDivX = size / openfl_TextureSize.x;
    float maxApply = 0.0;

    for (float d = 0.0; d < TWOPI; d += dirStep) {
        float sinD = sin(d);
        float cosD = cos(d);
        
        for (float i = qualStep; i <= 1.0; i += qualStep) {
            vec2 offset = vec2(sinD * sizeDivY * i, cosD * sizeDivX * i);
            bloom += flixel_texture2D(bitmap, uv + offset);
            maxApply += 1.0;
        }
    }

    bloom /= maxApply;
    
    float brightnessApply = brightness;
    if (brightness < 1.5) {
        brightnessApply = mix(1.5, 0.0, abs(1.0 - ((brightness - 1.0) * 2.0)));
    }

    gl_FragColor = color + bloom * brightnessApply;
}
