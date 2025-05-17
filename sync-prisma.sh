#!/bin/bash

# Liste des migrations manquantes
migrations=(
  20241126024745_init
  20241126025059_add_contact
  20241126123603_games
  20241126123908_add_message
  20241126125252_delete_unique
  20241126130036_relation_contact_message
  20241126130200_relation_contact_message
  20241126134716_add_level_game
  20241126160349_add_is_bot_visit
  20241126174612_add_devis
  20241126235333_read_reply
  20241127110733_add_replies
  20241127132735_uninique_reply
  20241128233144_add_unique_conraint_vistedpage_ip_date
  20241128235006_add_unique_conraint_vistedpage_ip_datee
  20241130203818_is_message_sent_by_email_and_why_not
  20241130210827_externalise_visite_page
  20241130211600_type_url
  20241130230003_unique
  20241130230103_unique
  20241130230750_unique_page_visit
  20241201134536_add_downloads
  20241201145028_add_visit_to_each_table
  20241201190450_add_blog
  20241201191026_unique_slug
  20241202012835_abbblog
  20241213192428_add_cascade_on_visit_delete
)

echo "🔧 Création des dossiers de migration manquants..."

for mig in "${migrations[@]}"; do
  dir="prisma/migrations/$mig"
  if [ ! -d "$dir" ]; then
    mkdir -p "$dir"
    echo "-- already applied" > "$dir/migration.sql"
    echo "✅ Créé : $dir"
  else
    echo "⚠️  Déjà existant : $dir"
  fi
done

echo "📌 Marquage des migrations comme appliquées..."

cmd="npx prisma migrate resolve"
for mig in "${migrations[@]}"; do
  cmd+=" --applied $mig"
done

# Exécuter la commande complète
eval $cmd

echo "✅ Terminé. Tu peux maintenant utiliser Prisma sans reset."
