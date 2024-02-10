async function fetchProfileData(){
  const url = 'https://raw.githubusercontent.com/kaio-d/portfolio-dio-js/main/data/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}

