import { useEffect, useRef, useState } from 'react'
import { getEnumerateDevices, getUserMedia } from './utils/getUserMedia'

const CONSTRAINTS: MediaStreamConstraints = {
  video: true,
  audio: true,
}

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [userMedia, setUserMedia] = useState<MediaStream | undefined>()
  const [selectFilter, setSelectFilter] = useState('')
  const getUserDevicesInfo = async () => {
    const res = await getEnumerateDevices()
    console.log(res)
  }
  const handleUserMedia = (media: MediaStream) => {
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
      <video
        className={selectFilter}
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: 300, height: 300 }}
      />
      <button type="button" onClick={getUserDevicesInfo}>
        获取用户设备信息
      </button>
      <select
        value={selectFilter}
        onChange={value => {
          // console.log('selectFilter', value)
          setSelectFilter(value.target.value)
        }}
      >
        <option label="none" value="none" />
        <option label="blur" value="blur" />
        <option label="grayscale" value="grayscale" />
        <option label="invert" value="invert" />
        <option label="sepia" value="sepia" />
      </select>
    </div>
  )
}

export default App
