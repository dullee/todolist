export default function Alert({onUserConfirmed}) {
  const userConfirmed = confirm("Are you sure you want to clear all completed tasks?", length);
  if (userConfirmed){
    onUserConfirmed()
  }
}
