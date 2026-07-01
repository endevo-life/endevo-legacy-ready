# Handoff – Add a Privacy Policy route to the app

**For:** junior dev · **Goal:** add an in-app `/privacy` screen + link to it, push a branch, open a PR.

The app uses **Expo Router v4** (file-based routing). A new file under `app/` = a new route.

---

## Facts already confirmed (don't re-ask)
- **Legal entity:** ENDevo, Inc.
- **Privacy contact email:** hello@endevo.life
- **Support email (store listing):** niki@finalplaybook.com
- **Category:** Education · **Analytics at launch:** OFF (stubbed in code – nothing is sent)
- Public URL to host the HTML: `https://endevo.life/finalplaybook/privacy`
- Ready-to-host file already filled in: [store-assets/privacy-policy.html](../store-assets/privacy-policy.html)
- Still TODO before publish: `[DATE]` and `[MAILING ADDRESS]` placeholders, and a lawyer pass.

---

## Step 1 – Branch off `main`
> Repo rule: no direct commits to `main`. Use a `feat/` branch.
```bash
git checkout main
git pull
git checkout -b feat/privacy-route
```

## Step 2 – Create the screen file

Create **`app/privacy.tsx`** with this content. It's a simple scrollable text screen
that mirrors the hosted policy, with a header and a back button matching the app style.

```tsx
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONTS, SPACING } from "@/constants/theme";

const PRIVACY_EMAIL = "hello@endevo.life";

export default function PrivacyScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
          <Text style={styles.back}>{"‹ Back"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.meta}>MyFinalPlaybook · ENDevo, Inc.</Text>

        <Text style={styles.h2}>1. Overview</Text>
        <Text style={styles.p}>
          MyFinalPlaybook is a free educational app that helps adults assess their
          legacy readiness across four areas – Digital, Legal, Financial, and Physical –
          and follow a personalized 7-day action plan. It is for adults, is not directed
          to children under 13, and provides educational content only (not legal,
          financial, tax, or medical advice).
        </Text>

        <Text style={styles.h2}>2. Information we collect</Text>
        <Text style={styles.p}>
          • First name and email address you provide, to personalize and send your results.{"\n"}
          • Whether you opted in to reminders and tips (marketing consent).{"\n"}
          • Your assessment answers, scores, readiness band, weakest domains, and platform (iOS/Android).{"\n"}
          • Quiz progress and plan completion are saved only on your device so you can resume.{"\n"}
          • If you enable notifications, daily reminders are scheduled locally on your device;
          no push token is sent to our servers.
        </Text>

        <Text style={styles.h2}>3. How we use it</Text>
        <Text style={styles.p}>
          To generate and deliver your results and 7-day plan, email your results, send reminders
          and tips with your consent, operate and improve the app, and meet legal obligations.
        </Text>

        <Text style={styles.h2}>4. How we share it</Text>
        <Text style={styles.p}>
          We do not sell your personal information. We share it with GoHighLevel (our CRM / email
          provider) to deliver your results and manage communications, with infrastructure providers
          that help us run the app (e.g. Expo/EAS), and when required by law.
        </Text>

        <Text style={styles.h2}>5. Your choices</Text>
        <Text style={styles.p}>
          You can unsubscribe from marketing emails any time, and request access to or deletion of
          your data by contacting us.
        </Text>

        <Text style={styles.h2}>6. Security</Text>
        <Text style={styles.p}>
          We use reasonable measures including encryption in transit (HTTPS). No method of
          transmission or storage is 100% secure.
        </Text>

        <Text style={styles.h2}>7. Contact</Text>
        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${PRIVACY_EMAIL}`)}>
          <Text style={[styles.p, styles.link]}>{PRIVACY_EMAIL}</Text>
        </TouchableOpacity>

        <Text style={styles.metaSmall}>
          Full policy: https://endevo.life/finalplaybook/privacy
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: SPACING.lg, paddingVertical: SPACING.sm,
  },
  back: { color: COLORS.accent, fontSize: FONTS.sizes.md, fontWeight: FONTS.weights.semibold },
  headerTitle: { color: COLORS.white, fontSize: FONTS.sizes.md, fontWeight: FONTS.weights.bold },
  scroll: { paddingHorizontal: SPACING.lg, paddingBottom: SPACING.xl, gap: SPACING.sm },
  meta: { color: COLORS.muted, fontSize: FONTS.sizes.sm, marginBottom: SPACING.sm },
  metaSmall: { color: COLORS.muted, fontSize: FONTS.sizes.xs, marginTop: SPACING.lg },
  h2: { color: COLORS.white, fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold, marginTop: SPACING.md },
  p: { color: COLORS.muted, fontSize: FONTS.sizes.sm, lineHeight: 22 },
  link: { color: COLORS.accent, fontWeight: FONTS.weights.semibold },
});
```

> ⚠️ Check the theme tokens. `app/_layout.tsx` and `app/index.tsx` import from
> `@/constants/theme` and use `COLORS`, `FONTS`, `SPACING`. Open
> [src/constants/theme.ts](../src/constants/theme.ts) and confirm the names above
> (`COLORS.accent`, `COLORS.muted`, `FONTS.sizes.lg`, `FONTS.weights.semibold`,
> etc.) exist – if a token has a different name, adjust to match. The screen
> renders fine even if you simplify the styles.

## Step 3 – Register the screen in the navigator

Open [app/_layout.tsx](../app/_layout.tsx) and add one line inside `<Stack>`,
next to the other `<Stack.Screen>` entries:

```tsx
<Stack.Screen name="privacy" />
```

## Step 4 – Add a link so users can reach it

Add a small "Privacy Policy" link on the welcome screen.
In [app/index.tsx](../app/index.tsx), the `import { useRouter }` and `router` already exist.
Inside the `ctaBlock` (just under the `fine` line, around line 113), add:

```tsx
<TouchableOpacity onPress={() => router.push("/privacy" as any)}>
  <Text style={styles.fine}>Privacy Policy</Text>
</TouchableOpacity>
```

(`styles.fine`, `TouchableOpacity`, and `Text` are already imported/defined in that file.)

## Step 5 – Verify it runs
```bash
npm run typecheck     # must pass (tsc --noEmit)
npm start             # open in Expo Go, tap the Privacy Policy link, confirm it opens and Back works
```

## Step 6 – Commit and open the PR
```bash
git add app/privacy.tsx app/_layout.tsx app/index.tsx
git commit -m "feat: add in-app privacy policy screen and link"
git push -u origin feat/privacy-route
```
Then open the PR on GitHub (base `main`). In the PR description, mention:
- New `/privacy` route + link on welcome screen.
- The hosted version (`store-assets/privacy-policy.html`) is the source of truth for
  Google Play's required Privacy policy URL.

---

## Notes for whoever fills Google Play Console
- **Privacy policy URL** field = where `store-assets/privacy-policy.html` is hosted
  (`https://endevo.life/finalplaybook/privacy`). The in-app screen is a convenience copy;
  Google requires the public URL.
- Data Safety + listing answers are in
  [docs/play-store-listing-and-data-safety.md](play-store-listing-and-data-safety.md).
- Analytics is OFF at launch – do **not** declare "App interactions / Analytics" in Data Safety.
