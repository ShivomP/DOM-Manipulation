const secondHandle = document.querySelector('.handle__second')
const minuteHandle = document.querySelector('.handle__minute')
const hourHandle = document.querySelector('.handle__hour')


requestAnimationFrame(setHandles)
setInterval(() => {
    setHandles()
}, 1000)

function setHandles(){
    const d = new Date()
    const hours = d.getHours()
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()

    const extraMinutesAngle = seconds * 0.1
    const minuteAngle = minutes * 6 + extraMinutesAngle

    const extraHoursAngle = minutes * 0.5
    const hourAngle = hours * 30 + extraHoursAngle
    
    hourHandle.style.transform = `rotate(${hourAngle}deg)`
    minuteHandle.style.transform = `rotate(${minuteAngle}deg)`
    secondHandle.style.transform = `rotate(${seconds * 6}deg)`
    requestAnimationFrame(setHandles)
}

