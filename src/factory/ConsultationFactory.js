class ConsultationFactory {
  Build(simpleConsultation) {
    var { date, finished} = simpleConsultation;
    date = new Date(date)
    var advantageConsultation = {
      key: 'today',
      highlight: 'blue',
      dates:[date],
    }
    if(!finished) advantageConsultation.highlight = 'red'
    return advantageConsultation;
  }
}

export default new ConsultationFactory();
