import time
import pygame
from gtts import gTTS
import uuid


def convert_text_to_audio(text):
    # The text that you want to convert to audio
    file_name = str(uuid.uuid4())
    mytext = f"{text}"

    # Language in which you want to convert
    language = 'en'

    # Passing the text and language to the engine
    myobj = gTTS(text=mytext, lang=language, slow=False)

    # Saving the converted audio in an mp3 file
    myobj.save(f"recordings/{file_name}.mp3")

    # Initialize the mixer module
    pygame.mixer.init()

    # Load the mp3 file
    pygame.mixer.music.load(f"recordings/{file_name}.mp3")

    # Play the loaded mp3 file
    pygame.mixer.music.play()

    # Wait for the audio to finish playing
    while pygame.mixer.music.get_busy(): 
        time.sleep(1)

    return pygame.mixer.music.load(f"recordings/{file_name}.mp3")

convert_text_to_audio("hi there can you hear me. if you know you know")