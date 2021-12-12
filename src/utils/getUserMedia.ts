/**
 * 获取用户的所有的输入设备信息
 */
export const getEnumerateDevices = () => navigator.mediaDevices.enumerateDevices()

/**
 * 获取用户的流信息
 * @param constraints
 */
export const getUserMedia = (constraints: MediaStreamConstraints) =>
  navigator.mediaDevices.getUserMedia(constraints)

// export const handle
