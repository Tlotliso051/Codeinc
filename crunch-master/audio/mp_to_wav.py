from moviepy.editor import AudioFileClip

def convert_mp3_to_wav(input_path):
    input_file = input_path
    output_file = input_file.replace('.mp3', '.wav')    
    audio_clip = AudioFileClip(input_path)
    audio_clip.write_audiofile(output_file, codec='pcm_s16le')

    return output_file




