fetch('https://script.google.com/macros/s/AKfycbwZ6VMQ9pE3xL27G3lfGekMtTi63I8rlUDr09l1LnzFq0yyhAuqP9qcQ1idh-s9pTUh/exec')
  .then(r => r.json())
  .then(data => {
    console.log(Object.keys(data));
    if (data.moringaLeads) console.log(data.moringaLeads.length);
    if (data.leads) console.log(data.leads.length);
  }).catch(console.error);
