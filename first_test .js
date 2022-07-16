// 1. 인자로 받는 members는 배열의 형태로 member의 이름을 요소로 담고 있다.
// 2. 10 <= members.length <=100
// 3. 한 조(group)는 5~7명으로 구성한다. 조는 member의 이름을 요소로 지니는 배열이다. 
// 4. 생성하는 조(group)의 갯수를 최소화 한다. 
// 5. 반환값은 객체로 조의 이름을 키로 조(group)를 키값으로 지닌다. 
// 6. 동일한 인자를 받아도 매번 랜덤한 결과를 반환한다. 
// 7. Amazon EC2 t2.micro 기준 1.5초 이내 값을 반환해야한다.

function mix_members(members){
  // 반환값을 선언하고 빈 객체를 할당한다.
  let result = {} ;
  
  // 최소한의 조(group)의 수를 구한다.
  let minimum = Math.ceil(members.length/7); 

  // 깊은복사 후 난수를 통한 무작위 정렬한다. 
  let randomMembers = [...members].sort(() => Math.random() - 0.5); 

  // 우선 멤버의 인원을 조당 7명으로 분배후 남은 인원은 마지막 조에 분배한다.
  for(let i=1; i<=minimum; i++){
      result[`${i}조`] = randomMembers.slice(7*(i-1), 7*i); 
  }
  
  // 조당 인원은 5명~7명이 되어야 하므로 마지막 조의 인원이 5명 미만일 경우 5명으로 맞춰준다.
  if(result[`${minimum}조`].length ===1 || result[`${minimum}조`].length === 2) {
      result[`${minimum}조`].push(result[`${minimum-2}조`].pop())
      result[`${minimum}조`].push(result[`${minimum-2}조`].pop())
      result[`${minimum}조`].push(result[`${minimum-1}조`].pop())
      result[`${minimum}조`].push(result[`${minimum-1}조`].pop())
  }
      
  if(result[`${minimum}조`].length ===3 || result[`${minimum}조`].length === 4) {
      result[`${minimum}조`].push(result[`${minimum-1}조`].pop())
      result[`${minimum}조`].push(result[`${minimum-1}조`].pop())
  }
  
  return result
}
