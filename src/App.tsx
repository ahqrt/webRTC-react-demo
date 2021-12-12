import { useEffect, useRef, useState } from 'react'
import { getEnumerateDevices, getUserMedia } from './utils/getUserMedia'

const CONSTRAINTS: MediaStreamConstraints = {
  video: true,
  audio: true,
}

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [userMedia, setUserMedia] = useState<MediaStream | undefined>()
  const getUserDevicesInfo = async () => {
    const res = await getEnumerateDevices()
    console.log(res)
  }
  const handleUserMedia = (media: MediaStream) => {
    console.log('media', media)
    setUserMedia(media)
    videoRef.current!.srcObject = media
  }
  const getAllUserMedia = async () => {
    getUserMedia(CONSTRAINTS).then(handleUserMedia)
  }

  useEffect(() => {
    getAllUserMedia()
  }, [])
  return (
    <div>
      <button type="button" onClick={getUserDevicesInfo}>
        获取用户设备信息
      </button>
      <video ref={videoRef} autoPlay playsInline></video>
    </div>
  )
}

export default App
