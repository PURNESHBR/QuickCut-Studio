import { storage } from "@/configs/FirebaseConfig";
import textToSpeech from "@google-cloud/text-to-speech";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { NextResponse } from "next/server";
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient({
    apiKey:process.env.GOOGLE_API_KEY
});

export async function POST(req){

    const {text,id,language}=await req.json();
    const langconvert ={
        'English':'en-US',
        'French':'fr-FR',
        'Italian':'it-IT',
        'Portuguese':'pt-BR',
        'Japanese':'ja-JP',
        'Korean':'ko-KR',
        'Russian':'ru-RU',
        'Spanish':'es-ES',
        'Romanian':'ro-RO',
        'German':'de-DE',
        'Kannada':'kn-IN',
        'Hindi':'hi-IN',
        'Tamil':'ta-IN',
        'Telugu':'te-IN',
        'Malayalam':'ml-IN',
        'Marathi':'mr-IN',
        'Bengali':'bn-IN',
        'Punjabi':'pa-IN',
        'Gujarati':'gu-IN',
        'Urdu':'ur-IN',
    }
    console.log(langconvert[language]);
    const storageRef=ref(storage,'ai-short-video-files/'+id+'.mp3');

   
    const request = {
        input: {text: text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: langconvert[language], ssmlGender: 'FEMALE'},
        // select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
      };

     // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);

  const audioBuffer=Buffer.from(response.audioContent,'binary');

  await uploadBytes(storageRef,audioBuffer,{contentType:'audio/mp3'});

  const downloadUrl=await getDownloadURL(storageRef);
  console.log(downloadUrl);
  return NextResponse.json({result:downloadUrl});
}