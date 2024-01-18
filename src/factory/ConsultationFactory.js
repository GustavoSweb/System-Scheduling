class ConsultationFactory {
  Build(simpleConsultation) {
    var { date, description} = simpleConsultation;
    date = new Date(date)
/*    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    time = time.split(":");
    const hour = Number.parseInt(time[0]);
    const minutes = Number.parseInt(time[1]);
*/
    var advantageConsultation = {
      dates:[date],
      dot:{
        color:'red',
        isComplete: false,
      },
      popover:{
        label:description,
      },

    }



    return advantageConsultation;
  }
}

export default new ConsultationFactory();
