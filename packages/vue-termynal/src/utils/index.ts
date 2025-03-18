export async function wait(time: number) {
  await new Promise<void>((resolve) => {
    if (time > 0) {
      setTimeout(resolve, time)
    } else {
      resolve()
    }
  })
}
