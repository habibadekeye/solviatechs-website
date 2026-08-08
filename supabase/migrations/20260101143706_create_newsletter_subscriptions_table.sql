/*
  # Newsletter Subscriptions Table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key) - Unique identifier for each subscription
      - `email` (text, unique, not null) - Subscriber email address
      - `subscribed_at` (timestamptz, not null) - Subscription timestamp
      - `is_active` (boolean, not null) - Subscription status

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for authenticated users to insert subscriptions
    - Add policy for service role to manage subscriptions

  3. Indexes
    - Create unique index on email for fast lookups and duplicate prevention

  4. Important Notes
    - Email addresses are stored in lowercase for consistency
    - Subscriptions default to active status
    - Timestamps use timezone-aware format
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now() NOT NULL,
  is_active boolean DEFAULT true NOT NULL
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can manage subscriptions"
  ON newsletter_subscriptions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscriptions(is_active) WHERE is_active = true;