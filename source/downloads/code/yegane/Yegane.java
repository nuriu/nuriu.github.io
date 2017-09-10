public class Yegane {

    // geri döndüreceğimiz nesnemiz.
    private static Yegane nesne = null;

    // oluşturucumuzu özelleştirerek 
    // doğrudan nesne oluşturmanın önüne geçiyoruz.
    private Yegane() {}

    // nesnemizi geri döndürdüğümüz fonksiyonumuz.
    public static Yegane NesneyiGetir() {
        if (nesne == null) {      // nesnemiz oluşturulmamış ise;
            nesne = new Yegane(); // nesnemizi oluşturuyoruz.
        }

        return nesne;             // nesnemizi döndürüyoruz.
    }

    //
    public void MerhabaDe() {
        System.out.println("Merhaba!");
    }
}