fetch('https://script.google.com/macros/s/AKfycbwZ6VMQ9pE3xL27G3lfGekMtTi63I8rlUDr09l1LnzFq0yyhAuqP9qcQ1idh-s9pTUh/exec?action=getLeads')
  .then(r => r.text())
  .then(text => console.log(text.substring(0, 100)));
