class ConsultationFactory {
  Build(simpleConsultation) {
    var { date} = simpleConsultation;
    date = new Date(date)
/*    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    time = time.split(":");
    const hour = Number.parseInt(time[0]);
    const minutes = Number.parseInt(time[1]);
*/
    var advantageConsultation = {
      key: 'today',
      highlight: 'red',
      dates:[date],
    }
    return advantageConsultation;
  }
}

export default new ConsultationFactory();
